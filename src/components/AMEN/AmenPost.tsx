import { motion } from 'framer-motion';

let Text1: string = 'Иногда самая черная чернота дает самые яркие лучи света.';
let Text2: string =
  ' Это были мои первые отношения без слов, мой первый проект без заранее определенной цели.';
let Text3: string = ' Но бывает так, что, стоя у цели, понимаешь, что сам путь был гораздо важнее.';

const items: string[] = [Text1, Text2, Text3];

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

const AmenPost = () => {
  return (
    <div className="amenPost">
      {items.map((el, i) => (
        <motion.p key={el} variants={textVariants} initial="hidden" animate="visible" custom={i}>
          {el}
        </motion.p>
      ))}
    </div>
  );
};

export default AmenPost;

{
  /* <p>&nbsp;&nbsp; Sometimes the blackest black yields the brightest beams of light.</p>
      <p>
        It was my first relationship without words, my first project without a pre-defined goal.
      </p>
      <p>
        But it happens that standing at the goal, you realize that the path itself was much more
        important.
      </p> */
}
