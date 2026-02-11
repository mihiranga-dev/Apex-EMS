import Sidebar from "./layout/Sidebar";

function App() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <header className="bg-white p-6 shadow-sm flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-700">Onboarding Portal</h2>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">M</div>
        </header>

        <main className="p-8">
           <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
              <h3 className="text-lg font-medium mb-4">Add New Employee</h3>
              <p className="text-slate-500 text-sm">Fill in the details to register a new member to Apex.</p>

              <div className="mt-6 p-10 border-2 border-dashed border-slate-200 rounded text-center text-slate-400">
                Onboarding Form Interface Coming Soon...
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}

export default App;