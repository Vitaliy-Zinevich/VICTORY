import { motion } from 'framer-motion';

let Text1: string =
  'I photographed when I thought it was necessary, capturing faces and places, notquite understanding what my work was leading to.';
let Text2: string =
  'Looking back, I realize that this path was the beginning of how I look at things today. I was often attracted to ‘unusual’ people and places. There is a kind of essential energy shining in all this, where the spiritual far outweighs the material';

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

{
  /* <p>
        &nbsp;&nbsp; I photographed when I thought it was necessary, capturing faces and places, not
        quite understanding what my work was leading to.
      </p>
      <p>
        &nbsp;&nbsp; Looking back, I realize that this path was the beginning of how I look at
        things today. I was often attracted to ‘unusual’ people and places. There is a kind of
        essential energy shining in all this, where the spiritual far outweighs the material
      </p> */
}
