"use client";
import classNames from "classnames";
import styles from "./customer-review-section.module.scss";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { GoStarFill } from "react-icons/go";

function CustomerReviewSection() {
  const count = useMotionValue(0);
  const rounded = useTransform<number, number>(count, Math.round);
  const reviewCountRef = useRef<HTMLSpanElement>(null);
  const isReviewCountInView = useInView(reviewCountRef, { once: true });

  useEffect(() => {
    if (isReviewCountInView) {
      const animation = animate(count, 13, {
        duration: 2
      });
      return () => animation.stop();
    }
  }, [count, isReviewCountInView]);

  return (
    <section
      id="#customer-review"
      className={classNames(
        styles["section-customer-review"],
        "bg-light-blue py-12"
      )}
    >
      <div className="container">
        <motion.div
          className={styles.customer}
          initial={{
            opacity: 0,
            y: 60
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
        >
          <div className={styles["customer-review"]}>
            <div className={styles["customer-review-wrapper"]}>
              <div className={styles["review-headline"]}>
                <h3 className={styles["review-title"]}>
                  What our customers are saying us?
                </h3>
                <p className={styles["review-des"]}>
                  Lorem ipsum dolor sit amet, consectetur elit. Maecenas varius
                  tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
                  justo.
                </p>
              </div>
              <div className={styles["review-details"]}>
                <div className={styles["review-caption"]}>
                  <span className={styles["review-caption-amount"]}>
                    <motion.span ref={reviewCountRef}>{rounded}</motion.span>
                    m+
                  </span>
                  <span className={styles["review-caption-text"]}>
                    Happy People
                  </span>
                </div>
                <div className={styles["review-rating"]}>
                  <span className={styles["review-rating-avg"]}>4.88</span>
                  <span className={styles["review-rating-text"]}>
                    Overall rating
                  </span>
                  <span className={styles["review-rating-stars"]}>
                    <GoStarFill className={styles["review-rating-star"]} />
                    <GoStarFill className={styles["review-rating-star"]} />
                    <GoStarFill className={styles["review-rating-star"]} />
                    <GoStarFill className={styles["review-rating-star"]} />
                    <GoStarFill className={styles["review-rating-star"]} />
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className={styles["customer-info"]}>
            <div className={styles["customer-user"]}>
              <Image
                src="/user/micheal-dam.jpg"
                width={80}
                height={80}
                alt="micheal"
                className={styles["customer-user-img"]}
              />
              <div className={styles["customer-user-job"]}>
                <p className={styles["customer-user__name"]}>David Michel</p>
                <p className={styles["customer-user__title"]}>
                  UX / UI Designer
                </p>
              </div>
            </div>
            <p className={styles["customer-des"]}>
              The place is in a great location in Gumbet. The area is safe and
              beautiful. The apartment was comfortable and the host was kind and
              responsive to our requests.
            </p>
            <div className={styles["customer-progress"]}>
              <span className={styles["customer-progress__value"]}>01</span>
              <span className={styles["customer-progress__bar"]}></span>
              <span className={styles["customer-progress__value"]}>05</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CustomerReviewSection;
