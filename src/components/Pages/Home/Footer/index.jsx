const InfoFooter = () => {
  return (
    <div className="mt-6 h-[100px] w-full flex justify-center">
      <ul className="flex items-center justify-center space-x-6 w-full">
        <li>
          <a href="">
            <img src="/svg/telegram.svg" alt="telegram" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/svg/instagram.svg" alt="telegram" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/svg/facebook.svg" alt="telegram" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InfoFooter;
