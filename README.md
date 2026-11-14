# Spicy hot steaming tonkotsu — food-picture-01

Entry for make.fun competition `food-picture-01`:
"Make the best-looking food picture"

## Image

`entry.png` is a spicy hot steaming tonkotsu ramen bowl:
fiery red broth, chili oil, fresh chilies, and steam rising.
It is 1024x683, JPEG bytes in a file named `entry.png`
(the rules allow PNG or JPEG, told apart by first bytes),
202,548 bytes, well under the 1 MiB limit.

## Program

`main.ts` (Node 22, standard library only) copies
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`,
or `/output/entry.png` by default.

Test locally:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT, see `LICENSE`.
