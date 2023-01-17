import { Component, Input, Output } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileNode } from '../file';
import { FILE_TREE_DATA } from '../tree-files';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css'],
})

// mat-tree component using material ui
export class FileTreeComponent {
  treeControl = new NestedTreeControl<FileNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode>();

  constructor() {
    this.dataSource.data = FILE_TREE_DATA;
  }

  hasChild = (_: number, node: FileNode) =>
    !!node.children && node.children.length > 0;

  // gets ancestors of the leaf node
  getAncestors(array: any, name: any): any {
    if (typeof array != 'undefined') {
      for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
          return [array[i]];
        }
        const a = this.getAncestors(array[i].children, name);
        if (a !== null) {
          a.unshift(array[i]);
          return a;
        }
      }
    }
    return null;
  }

  // gets the full path and console logs from a leaf node
  onLeafNodeClick(node: FileNode): void {
    const ancestors = this.getAncestors(this.dataSource.data, node.name);
    console.log('ancestors ', ancestors);

    // this.treeControl.collapse(ancestors[0]);
    console.log('direct parent  ', ancestors[ancestors.length - 2]);
    let fullFilePath = '';
    ancestors.forEach((ancestor: any) => {
      fullFilePath += `${ancestor.name}/`;
    });
    console.log('File Path: ', fullFilePath);
    // this.filePath = breadcrumbs;
  }
}
