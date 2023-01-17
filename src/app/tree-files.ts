import { FileNode } from './file';

export const FILE_TREE_DATA: FileNode[] = [
  {
    name: 'dir1',
    children: [
      {
        name: 'diry',
        children: [{ name: 'file3.ext' }],
      },
    ],
  },
  {
    name: 'dir2',
    children: [
      {
        name: 'dirx',
        children: [{ name: 'file.ext' }, { name: 'file1.ext' }],
      },
      {
        name: 'file2.ext',
      },
    ],
  },
  {
    name: 'dir3',
    children: [
      {
        name: 'dirz',
        children: [{ name: 'file4.ext' }],
      },
    ],
  },
  {
    name: 'dir4',
    children: [
      {
        name: 'dira',
        children: [{ name: 'file5.ext' }],
      },
    ],
  },
  {
    name: 'dir5',
    children: [
      {
        name: 'dirb',
        children: [{ name: 'file6.ext' }],
      },
    ],
  },
  {
    name: 'dir6',
    children: [
      {
        name: 'dir0',
        children: [
          { name: 'file7.ext' },
          { name: 'file8.ext' },
          { name: 'file9.ext' },
        ],
      },
    ],
  },
  {
    name: 'dir7',
    children: [
      {
        name: 'dirc',
        children: [
          { name: 'dire', children: [] },
          {
            name: 'dire',
            children: [{ name: 'dirv', children: [{ name: 'file11.ext' }] }],
          },
          { name: 'file12.ext' },
        ],
      },
    ],
  },
  {
    name: 'file10.ext',
  },
];
