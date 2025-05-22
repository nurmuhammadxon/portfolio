import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    const is404 = error?.status === 404;

    return (
        <div className="h-screen flex items-center justify-center px-6 bg-lightMode dark:bg-darkMode text-softDark dark:text-gainsboro text-center">
            <div className="max-w-xl space-y-6">
                <h1 className="text-6xl font-bold text-red-600 dark:text-red-400 animate-bounce">
                    {is404 ? '404' : 'Xato'}
                </h1>
                <p className="text-2xl font-semibold">
                    {is404
                        ? "Oops! Bu sahifa kodlar orasida yo‘qolib ketgan shekilli... 🐛"
                        : "Xatolik sodir bo‘ldi — kodimizda bug topildi! 🐞"}
                </p>
                <p className="text-gray-600 dark:text-gray-400 italic">
                    {error?.statusText || error?.message || "Noma'lum xatolik yuz berdi."}
                </p>

                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-softDark dark:bg-gainsboro text-white dark:text-darkMode rounded-lg shadow hover:shadow-xl hover:scale-105 transition-all duration-500 ease-initial"
                >
                    {is404
                        ? "Keling, bosh sahifaga qaytamiz, u yerda hamma narsalar joyida. 💻"
                        : "Hmm, server hushyor emas shekilli. Orqaga qaytib, yana bir marta sinab ko‘ring. 😌🔧"
                    }
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;
