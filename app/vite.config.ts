// // // // import { defineConfig } from 'vite';
// // // import { extname, relative, resolve } from 'path';
// // // // import { fileURLToPath } from 'node:url';
// // // // import { glob } from 'glob';
// // // // import react from '@vitejs/plugin-react';
// // // // import dts from 'vite-plugin-dts';
// // // import { readdirSync, statSync } from 'fs';

// // // // // Function to get all subdirectories in a directory
// // // const getSubdirectories = dir =>
// // //   readdirSync(dir).filter(entry => statSync(resolve(dir, entry)).isDirectory());

// // // // // Get all subdirectories in the src directory
// // // const folders = getSubdirectories('lib/themes');

// // // // console.log(folders);

// // // // // Define entry points for each folder
// // // const input = Object.fromEntries(
// // //   folders.map(folder => [folder, `lib/${folder}/index.tsx`])
// // // );

// // // // console.log(input);

// // // // // https://vitejs.dev/config/
// // // // export default defineConfig({
// // // //   plugins: [react()],
// // // //   build: {
// // // //     target: 'esnext',
// // // //     outDir: 'dist', // Output directory
// // // //     minify: true, // Minify the output using terser
// // // //     assetsInlineLimit: 4096,
// // // //     // copyPublicDir: false,
// // // //     lib: {
// // // //       entry: resolve(__dirname, 'lib/index.ts'),
// // // //       // entry: input,
// // // //       // formats: ['es'],
// // // //       formats: ['cjs'],
// // // //     },
// // // //     rollupOptions: {
// // // //       // input: 'lib/themes/index.ts',
// // // //       // external: ['react', 'react/jsx-runtime'],
// // // //       input: Object.fromEntries(
// // // //         glob.sync('lib/**/*.{ts,tsx}').map(file => [
// // // //           // The name of the entry point
// // // //           // lib/nested/foo.ts becomes nested/foo
// // // //           relative('lib', file.slice(0, file.length - extname(file).length)),
// // // //           // The absolute path to the entry file
// // // //           // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
// // // //           fileURLToPath(new URL(file, import.meta.url)),
// // // //         ])
// // // //       ),
// // // //       // input,
// // // //       // output: {
// // // //       //   assetFileNames: 'assets/[name][extname]',
// // // //       //   entryFileNames: '[name].js',
// // // //       // },
// // // //       output: {
// // // //         entryFileNames: '[name].js', // Output file format
// // // //         chunkFileNames: '[name].[hash].js', // Chunk file format
// // // //         assetFileNames: '[name].[ext]', // Asset file format
// // // //       },
// // // //     },
// // // //   },
// // // // });

// // // // vite.config.ts
// // // import { defineConfig } from 'vite';
// // // import react from '@vitejs/plugin-react';

// // // export default defineConfig({
// // //   plugins: [react()],
// // //   build: {
// // //     minify: true,
// // //     lib: {
// // //       entry: 'lib/index.ts',
// // //       name: 'MyComponentLibrary',
// // //       formats: ['es'],
// // //     },
// // //     rollupOptions: {
// // //       external: ['react', 'react-dom'],
// // //       // input,
// // //       output: {
// // //         globals: {
// // //           react: 'React',
// // //           'react-dom': 'ReactDOM',
// // //         },
// // //         manualChunks: {
// // //           'themes/generic': ['lib/themes/generic/index.tsx'],
// // //           'themes/minimal': ['lib/themes/minimal/index.tsx'],
// // //         },
// // //         entryFileNames: '[name].js', // Output file format
// // //         chunkFileNames: '[name].js', // Chunk file format
// // //       },
// // //     },
// // //   },
// // // });

// // // vite.config.ts
// // import { defineConfig } from 'vite';
// // import react from '@vitejs/plugin-react';
// // import { resolve } from 'path';
// // import { readdirSync } from 'fs';

// // // Function to get all files in a directory
// // const getFilesInDirectory = dir =>
// //   readdirSync(dir).map(file => resolve(dir, file));

// // // Function to get all TypeScript files in the components directory
// // const getComponentFiles = () =>
// //   getFilesInDirectory('lib/themes').filter(
// //     file => file.endsWith('.tsx') || file.endsWith('.ts')
// //   );

// // console.log(getComponentFiles());

// // // Define individual entry points for each component
// // const entryPoints = getComponentFiles().reduce((entries, file) => {
// //   const componentName = file.replace(/^lib\/themes\/(.+)\.tsx$/, '$1');
// //   entries[componentName] = file;
// //   return entries;
// // }, {});

// // console.log(entryPoints);

// // export default defineConfig({
// //   plugins: [react()],
// //   build: {
// //     outDir: 'dist',
// //     rollupOptions: {
// //       input: entryPoints,
// //     },
// //   },
// // });

// // vite.config.ts
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
// import fs, { readdirSync } from 'fs';

// // Function to get all folders in a directory
// const getFoldersInDirectory = dir =>
//   readdirSync(dir).filter(entry =>
//     fs.statSync(resolve(dir, entry)).isDirectory()
//   );

// // Function to get all component folders in the components directory
// const getComponentFolders = () =>
//   getFoldersInDirectory('lib/themes').map(folder =>
//     resolve('lib/themes', folder)
//   );

// // Define individual entry points for each component folder
// const entryPoints = getComponentFolders().reduce((entries, folder) => {
//   const componentName = folder.split('/').pop(); // Get the component name from the folder name
//   entries[componentName] = resolve(folder, 'index.tsx'); // Set the entry point to the index.ts file in the folder
//   return entries;
// }, {});

// console.log(entryPoints, 'e');

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       input: entryPoints,
//       external: ['react', 'react-dom'],
//       output: {
//         globals: {
//           react: 'React',
//           'react-dom': 'ReactDOM',
//         },
//         entryFileNames: 'themes/[name].js', // Output file format
//         chunkFileNames: 'themes/[name].js', // Chunk file format
//       },
//     },
//   },
// });

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import reactRefresh from '@vitejs/plugin-react-refresh';
// import { minifyHtml, injectHtml } from 'vite-plugin-html';

// Function to get all folders in a directory
const getFoldersInDirectory = (dir: string) =>
  readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

// Function to get all component folders in the components directory
const getComponentFolders = () =>
  getFoldersInDirectory('lib/themes').map(folder =>
    resolve('lib/themes', folder)
  );

// Define individual entry points for each component folder
const entryPoints = getComponentFolders().reduce((entries, folder) => {
  const componentName = folder.split('/').pop(); // Get the component name from the folder name

  if (componentName) {
    entries = { ...entries, [componentName]: resolve(folder, 'index.tsx') };
  }
  // entries[componentName] = resolve(folder, 'index.tsx'); // Set the entry point to the index.tsx file in the folder
  return entries;
}, {});

console.log(entryPoints, 'ep');

export default defineConfig({
  plugins: [
    reactRefresh(),
    // minifyHtml(),
    // injectHtml({
    //   injectData: {
    //     title: 'My React Components',
    //     injectTo: 'head',
    //   },
    // }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      // entry: input,
      formats: ['es'],
      // formats: ['cjs'],
    },
    outDir: 'dist/themes',
    minify: true,
    sourcemap: false,
    emptyOutDir: true,
    // assetsInlineLimit: 4096,
    copyPublicDir: false,
    rollupOptions: {
      input: entryPoints,
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        //   'react/jsx-runtime': 'React',
        // },

        // assetFileNames: '[name][extname]',
        entryFileNames: '[name].js',
        // chunkFileNames: undefined,
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return 'shared'; // Bundle shared dependencies
        //   }
        // },
        format: 'es', // Set the output format to ES modules
      },
    },
  },
});
