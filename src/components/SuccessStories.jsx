const SuccessStories = () => {
  const stories = [
    {
      title: "A Fresh Start for Ayesha",
      content:
        "After losing her job, Ayesha struggled to provide meals for her family. Through SharePlate, she was able to access fresh, nutritious food donated by her community. Today, she's back on her feet and volunteers to help others in need.",
    },
    {
      title: "Fighting Food Waste Together",
      content:
        "Rafiq, a local restaurant owner, realized he could share surplus food instead of letting it go to waste. By joining SharePlate, he's helped feed dozens of families in his neighborhood while reducing food waste.",
    },
    {
      title: "A Community United",
      content:
        "When the floods hit their village, residents came together using SharePlate to share resources and food supplies. The platform became a lifeline, showing the power of collective effort in tough times.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="md:max-w-[85%] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold text-blue-600 text-center mb-6">
          Success Stories
        </h2>
        <p className="text-center text-lg text-gray-600 mb-8">
          See how SharePlate is making a difference in the lives of people and
          communities around us.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div
              key={index}
              className="card bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-500 mb-4">
                {story.title}
              </h3>
              <p className="text-gray-700">{story.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
