import { motion } from 'framer-motion';

let Text1: string =
  'Yet where should beauty be found if not in banality, in the fleeting gesturesand repetitive rhythms of daily life that fade so far into the background that they becomeworkaday, unlovely – in a word, imperfect?';
let Text2: string =
  'We tend to think of beauty as flawless. Yet perfection is often so perfect, it becomesbland.';
let Text3: string =
  'A hymn to human ingenuity in a land where machines are not yet king, where life still hassoul.';

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

const ImperfectionPost = () => {
  return (
    <div className="imperfectionPost">
      {items.map((el, i) => (
        <motion.p key={el} variants={textVariants} initial="hidden" animate="visible" custom={i}>
          {el}
        </motion.p>
      ))}
    </div>
  );
};

export default ImperfectionPost;

{
  /* <p> &nbsp;&nbsp;This is what we call ordinary.</p>
      <p>
        &nbsp;&nbsp; Yet where should beauty be found if not in banality, in the fleeting gestures
        and repetitive rhythms of daily life that fade so far into the background that they become
        workaday, unlovely – in a word, imperfect?
      </p>
      <p>
        We tend to think of beauty as flawless. Yet perfection is often so perfect, it becomes
        bland.
      </p>
      <p>
        A hymn to human ingenuity in a land where machines are not yet king, where life still has
        soul.
      </p> */
}
