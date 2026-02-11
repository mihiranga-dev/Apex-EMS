const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col p-4 shadow-xl">
      <h1 className="text-2xl font-bold text-blue-400 mb-8">Apex EMS</h1>
      <nav className="space-y-4">
        <a href="#" className="block p-3 rounded hover:bg-slate-800 transition">Dashboard</a>
        <a href="#" className="block p-3 rounded hover:bg-slate-800 transition">Employee List</a>
        <a href="#" className="block p-3 rounded bg-blue-600">Onboarding</a>
        <a href="#" className="block p-3 rounded hover:bg-slate-800 transition">Payroll</a>
      </nav>
      <div className="mt-auto p-4 border-t border-slate-800 text-sm text-slate-400">
        Admin: Mihiranga
      </div>
    </div>
  );
};

export default Sidebar;