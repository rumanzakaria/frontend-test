/*
*   | a b c |   | x |   | ax + by + cz |
*   | d e f | * | y | = | dx + ey + fz |
*   | g h i |   | z |   | gx + hy + iz |
*
*   | M11 M21 M31 |   | x |   | M11x + M21y + M31 |
*   | M12 M22 M32 | * | y | = | M12x + M22y + M32 |
*   | 0   0   1   |   | 1 |   | 0    + 0    + 1   |
*
*   | 1 0 5 |   | 3 |   | 8 |
*   | 0 1 6 | * | 1 | = | 7 |
*   | 0 0 1 |   | 1 |   | 1 |
*
*   https://developer.mozilla.org/en/docs/Web/SVG/Attribute/transform
*/

export default ([a, d, b, e, c, f]) => ({ x, y, ...rest }) =>
  (x==null || y==null)
    ? rest
    : {
        ...rest,
        x: (a*x) + (b*y) + (c*1),
        y: (d*x) + (e*y) + (f*1),
      }
