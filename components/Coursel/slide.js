import { useState, useEffect } from 'react';

export const rotateForward = (arr, current, last, k) => {
  let start = current + k;
  let end = last + k;
  const length = arr.length;

  if (start > length) {
    start -= length;
  }

  if (end >= length) {
    end -= length;
  }

  if (end > start) {
    return {
      start,
      end,
      slides: arr.slice(start, end + 1),
    };
  }

  return {
    start,
    end: end,
    slides: arr.slice(start, length).concat(arr.slice(0, end + 1)),
  };
};

export const rotateBack = (arr, current, last, k) => {
  let start = current - k;
  let end = last - k;
  const length = arr.length;

  if (start < 0) {
    start += length;
  }
  if (end < 0) {
    end += length;
  }

  if (start < end) {
    return {
      start,
      end,
      slides: arr.slice(start, end + 1),
    };
  }

  return {
    start,
    end,
    slides: arr.slice(0, end + 1).concat(arr.slice(start, length)),
  };
};

const getWindowWidth = () => window.innerWidth;

export const getWidth = () => {
  const width = getWindowWidth();

  return width > 1024 ? 3 : width > 768 ? 2 : 1;
};
