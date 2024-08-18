export const About: React.FC = () => {
  return (
    <div className="text-center p-6">
      <h1 className="mt-5 text-4xl font-bold text-gray-800">About Us</h1>
      <p className="mt-4 text-lg text-gray-600">
        Welcome to <span className="font-semibold text-indigo-600">ShopEase</span> – your go-to destination for a seamless online shopping experience!
      </p>
      <p className="mt-4 text-lg text-gray-600">
        At ShopEase, our mission is to revolutionize the way you shop online by offering a diverse range of high-quality products, unbeatable prices, and exceptional customer service. We understand that shopping should be an enjoyable experience, and we're dedicated to making it as convenient and satisfying as possible.
      </p>
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">Our Vision</h2>
      <p className="mt-4 text-lg text-gray-600">
        Our vision is to be the most trusted and innovative e-commerce platform, continually evolving to meet the needs of our customers. We aim to create a shopping environment where you can find everything you need in one place, with ease and confidence.
      </p>
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">What Sets Us Apart</h2>
      <ul className="mt-4 text-lg text-gray-600 ">
        <li>Extensive Product Range: From the latest gadgets to everyday essentials, we offer a wide selection of products to cater to all your needs.</li>
        <li>Competitive Pricing: Enjoy great deals and discounts on top brands and products, ensuring you get the best value for your money.</li>
        <li>Exceptional Customer Service: Our friendly and knowledgeable customer support team is here to assist you with any inquiries or issues, ensuring a smooth shopping experience.</li>
        <li>Secure Shopping Experience: Shop with confidence knowing that your personal information is protected with state-of-the-art security measures.</li>
      </ul>
      <p className="mt-6 text-lg text-gray-600">
        At ShopEase, we are more than just an e-commerce platform – we are a community dedicated to enhancing your shopping journey. Thank you for choosing us as your preferred online store. We look forward to serving you and making your shopping experience enjoyable and effortless.
      </p>
      <p className="mt-4 text-lg text-gray-600">
        For any questions or feedback, feel free to <a href="/contacts" className="text-indigo-600 underline">contact us</a>. Happy shopping!
      </p>
    </div>
  );
};
