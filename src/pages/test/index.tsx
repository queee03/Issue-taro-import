import { APP_TITLE } from "@/configs/constant";

const Test = () => {
  return (
    <view>
      注释掉下面这行引入就不会白屏
      {APP_TITLE}
    </view>
  );
};

export default Test;
