import { Component } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { FileNode } from '../file';
import { FILE_TREE_DATA } from '../tree-files';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.css'],
})
export class FileTreeComponent {
  treeControl = new NestedTreeControl<FileNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FileNode>();

  constructor() {
    this.dataSource.data = FILE_TREE_DATA;
  }

  hasChild = (_: number, node: FileNode) =>
    !!node.children && node.children.length > 0;
}
