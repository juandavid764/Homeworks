export const Dashboard = () => {
  console.log("Dashboard");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md px-6 py-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6">MiApp</h2>
        <nav className="space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            🏠 Inicio
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            📊 Reportes
          </a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">
            ⚙️ Configuración
          </a>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Bienvenido al panel principal 👋</p>
        </header>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              👥 Usuarios
            </h3>
            <p className="text-3xl font-bold text-blue-600">125</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              💰 Ventas
            </h3>
            <p className="text-3xl font-bold text-green-600">$12,430</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              📨 Mensajes
            </h3>
            <p className="text-3xl font-bold text-purple-600">38</p>
          </div>
        </section>
      </main>
    </div>
  );
};
