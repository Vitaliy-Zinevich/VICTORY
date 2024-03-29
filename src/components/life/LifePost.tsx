import { motion } from 'framer-motion';

let Text1: string =
  'Я фотографировала, когда считал это необходимым, запечатлевая лица и места, не совсем понимая, к чему ведет моя работа.';
let Text2: string =
  'Оглядываясь назад, я понимаю, что этот путь был началом того, как я смотрю на вещи сегодня. Меня часто привлекали ‘необычные’ люди и места. Во всем этом сияет некая сущностная энергия, в которой духовное намного перевешивает материальное.';

const items: string[] = [Text1, Text2];

const textVariants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.7,
    },
  }),
  hidden: { opacity: 0, y: 100 },
};

const LifePost = () => {
  return (
    <div className="lifePost">
      {items.map((el, i) => (
        <motion.p key={el} variants={textVariants} initial="hidden" animate="visible" custom={i}>
          {el}
        </motion.p>
      ))}
    </div>
  );
};

export default LifePost;
