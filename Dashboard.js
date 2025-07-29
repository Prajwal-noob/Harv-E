import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Clock,
  Plus,
  ArrowRight
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { chatService } from '../services/chatService';
import { documentService } from '../services/documentService';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  const { data: dashboardData, isLoading } = useQuery(
    'dashboard',
    async () => {
      const [chats, documents] = await Promise.all([
        chatService.getChats({ limit: 5 }),
        documentService.getDocuments({ limit: 5 })
      ]);
      return { chats, documents };
    },
    {
      refetchInterval: 30000, // Refetch every 30 seconds
    }
  );

  const stats = [
    {
      name: 'Total Chats',
      value: dashboardData?.chats?.pagination?.total || 0,
      icon: MessageSquare,
      color: 'bg-blue-500',
      href: '/chat'
    },
    {
      name: 'Total Documents',
      value: dashboardData?.documents?.pagination?.total || 0,
      icon: FileText,
      color: 'bg-green-500',
      href: '/documents'
    },
    {
      name: 'Active Sessions',
      value: dashboardData?.chats?.chats?.length || 0,
      icon: TrendingUp,
      color: 'bg-purple-500',
      href: '/chat'
    },
    {
      name: 'Recent Activity',
      value: 'Last 24h',
      icon: Clock,
      color: 'bg-orange-500',
      href: '#'
    }
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-blue-100">
          Ready to analyze your legal documents and get expert advice?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.name}
              to={stat.href}
              className="card hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                  <Icon size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Start New Chat */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="space-y-3">
            <Link
              to="/chat"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Start New Chat</p>
                  <p className="text-sm text-gray-500">Ask legal questions or upload documents</p>
                </div>
              </div>
              <Plus className="h-5 w-5 text-gray-400" />
            </Link>
            
            <Link
              to="/documents"
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Upload Document</p>
                  <p className="text-sm text-gray-500">Analyze contracts, notices, or legal documents</p>
                </div>
              </div>
              <Plus className="h-5 w-5 text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Link
              to="/chat"
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center"
            >
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {dashboardData?.chats?.chats?.slice(0, 3).map((chat) => (
              <div key={chat._id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{chat.title}</p>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(chat.lastActivity), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <Link
                  to={`/chat/${chat._id}`}
                  className="text-blue-600 hover:text-blue-500"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
            
            {(!dashboardData?.chats?.chats || dashboardData.chats.chats.length === 0) && (
              <p className="text-sm text-gray-500 text-center py-4">
                No recent activity. Start your first chat!
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Recent Documents */}
      {dashboardData?.documents?.documents && dashboardData.documents.documents.length > 0 && (
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Documents</h2>
            <Link
              to="/documents"
              className="text-sm text-blue-600 hover:text-blue-500 flex items-center"
            >
              View all
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Document
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardData.documents.documents.slice(0, 5).map((doc) => (
                  <tr key={doc._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {doc.originalName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        {doc.analysis?.documentType || 'Unknown'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        doc.status === 'analyzed' 
                          ? 'bg-green-100 text-green-800'
                          : doc.status === 'processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDistanceToNow(new Date(doc.createdAt), { addSuffix: true })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard; 