import { useState, useEffect } from 'react';

const AuthResult = ({ user, onLogout }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:4000/getLeaderBoardInfo');
        const data = await response.json();
        if (!response.ok) throw new Error('Failed to fetch leaderboard');
        setLeaderboard(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLeaderboard();
  }, []);

  // Reward tiers configuration
  const rewardTiers = [
    { threshold: 300, label: 'Water Bottle' },
    { threshold: 600, label: 'Earbuds' },
    { threshold: 800, label: 'Smartwatch' },
    { threshold: 1000, label: 'Tablet' }
  ];

  // Calculate progress percentage
  const progress = Math.min((user.TotalDonationsRaised / 1000) * 100, 100);
  const userRank = leaderboard.findIndex(u => u.refCode === user.refCode) + 1;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* User Profile Section */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-white">Welcome, {user.name}!</h2>
          <button
            onClick={onLogout}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition duration-200"
          >
            Logout
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Stats */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Your Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Ref Code:</span>
                <span className="font-medium text-white">{user.refCode}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Donations Raised:</span>
                <span className="font-medium text-green-400">${user.TotalDonationsRaised}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Rank:</span>
                <span className="font-medium text-blue-400">
                  {userRank ? `#${userRank}` : '--'}
                  {userRank <= 3 && userRank > 0 && (
                    <span className="ml-2 text-yellow-400">🏆</span>
                  )}
                </span>
              </div>
            </div>
          </div>
          
          {/* Rewards Progress */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-300">Reward Progress</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">${user.TotalDonationsRaised}/$1000</span>
                <span className="text-blue-400">{Math.floor(progress)}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs mt-3">
                {rewardTiers.map((tier, index) => (
                  <div 
                    key={index}
                    className={`text-center p-1 rounded ${user.TotalDonationsRaised >= tier.threshold 
                      ? 'bg-green-900/50 text-green-400 border border-green-600' 
                      : 'text-gray-500'}`}
                  >
                    <div className="font-medium">{tier.label}</div>
                    <div className="text-xs">${tier.threshold}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
          <div className="text-sm text-gray-400">
            {leaderboard.length} participants
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="p-4 bg-red-900/30 border border-red-700 text-red-400 rounded-lg">
            {error}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Rank</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ref Code</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Donations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {leaderboard.map((lbUser, index) => (
                  <tr 
                    key={lbUser.refCode} 
                    className={lbUser.refCode === user.refCode 
                      ? 'bg-blue-900/20' 
                      : index % 2 === 0 
                        ? 'bg-gray-800' 
                        : 'bg-gray-800/50'}
                  >
                    <td className="px-4 py-4 whitespace-nowrap text-white">
                      <div className="flex items-center">
                        <span className={index < 3 ? "font-bold " : ""}>
                          {index + 1}
                        </span>
                        {index === 0 && <span className="ml-2 text-yellow-400">🥇</span>}
                        {index === 1 && <span className="ml-2 text-gray-300">🥈</span>}
                        {index === 2 && <span className="ml-2 text-amber-600">🥉</span>}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={lbUser.refCode === user.refCode ? "font-bold text-blue-400" : "text-white"}>
                          {lbUser.name}
                        </span>
                        {lbUser.refCode === user.refCode && (
                          <span className="ml-2 text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                            YOU
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-gray-300">
                      {lbUser.refCode}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="font-medium text-green-400">
                        ${lbUser.TotalDonationsRaised}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthResult;