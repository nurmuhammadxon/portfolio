import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/config.js';

function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [blogData, setBlogData] = useState({});

    const getDocument = async (Id) => {
        setLoading(true)
        try {
            const querySnapshot = await getDocs(collection(db, "blogs"));
            const data = [];
            querySnapshot.forEach(doc => {
                data.push({ id: doc.id, ...doc.data() });

            });
            const foundBlog = data.find(i => i.id === Id);
            setBlogData(foundBlog || {});
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (id) {
            getDocument(id);
        }
    }, [id]);

    return (
        <>
            {/* Qoraytirilgan orqa fon */}
            <div
                className="fixed inset-0 bg-[#00000080] z-40 cursor-pointer"
                onClick={() => navigate('/blog')}
            />

            {/* Modal oyna */}
            <div className="fixed top-1/2 left-1/2 z-50 max-w-3xl w-[90vw] max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 sm:p-10 transform -translate-x-1/2 -translate-y-1/2 text-gray-800 dark:text-gray-100">
                {loading ? (
                    <p className="text-center text-gray-600 dark:text-gray-300">Yuklanmoqda...</p>
                ) : blogData ? (
                    <>
                        {/* Sarlavha */}
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{blogData.title}</h1>

                        {/* Muallif va sana */}
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                            <span>Muallif: <strong>{blogData.author}</strong></span>
                            <span>Sanasi: {blogData.date}</span>
                        </div>

                        {/* Rasm */}
                        <div className="w-full h-48 sm:h-[300px] overflow-hidden rounded-md mb-6">
                            <img
                                src={blogData.image}
                                alt={blogData.title}
                                className="w-full h-full object-cover object-center rounded-md"
                            />
                        </div>

                        {/* Qisqacha tavsif */}
                        <p className="mb-4 text-gray-700 dark:text-gray-300 font-semibold">{blogData.des}</p>

                        {/* To'liq kontent */}
                        <div className="prose prose-sm sm:prose-base max-w-none dark:prose-invert mb-6">
                            <p>{blogData.content}</p>
                        </div>

                        {/* Teglar */}
                        {blogData.tags && blogData.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {blogData.tags.map((tag, index) => {
                                    const colors = [
                                        'bg-red-100 text-red-600',
                                        'bg-blue-100 text-blue-700',
                                        'bg-yellow-100 text-yellow-700',
                                        'bg-green-100 text-green-700',
                                        'bg-purple-100 text-purple-700',
                                        'bg-pink-100 text-pink-700',
                                        'bg-teal-100 text-teal-700',
                                    ];
                                    const colorClass = colors[index % colors.length];

                                    return (
                                        <span
                                            key={tag + index}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
                                        >
                                            #{tag}
                                        </span>
                                    );
                                })}
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-center text-red-600 dark:text-red-400">Blog topilmadi.</p>
                )}
            </div>
        </>
    );
}

export default BlogDetail;
