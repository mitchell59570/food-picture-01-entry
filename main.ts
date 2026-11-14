// Food-picture-01 entry: spicy hot steaming tonkotsu ramen.
// The program copies the entry image to the output directory
// the grader reads, as /output/entry.png.
// The file is named entry.png, as the rules require, and its
// bytes are JPEG, which the rules allow and tell apart by
// their first bytes. It is 1024x683 and well under 1 MiB.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
