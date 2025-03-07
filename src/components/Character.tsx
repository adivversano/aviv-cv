import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './style.module.scss';

type ParagraphProps = {
  paragraph: string
  className: string
}

export default function Paragraph({ paragraph, className }: ParagraphProps) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.055"]
  })

  const words = paragraph.split(" ")
  return (
    <p
      ref={container}
      className={styles.paragraph + ' ' + className}
    >
      {
        words.map((word: string, i: number) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
      }
    </p>
  )
}

type WordAndCharProps = {
  children: string,
  progress: MotionValue<number>,
  range: number[]
}
const Word = ({ children, progress, range }: WordAndCharProps) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <span className={styles.word}>
      {
        children.split("").map((char: string, i: number) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }
    </span>
  )
}

const Char = ({ children, progress, range }: WordAndCharProps) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  )
}
