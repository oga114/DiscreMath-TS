# DiscreteMath-TS

## 概要
**DiscreteMath-TS** は、TypeScriptを使って離散数学の基本概念を学ぶためのリポジトリです。論理演算、集合論、グラフ理論、計算理論など、離散数学の各トピックをTypeScriptのコードで実装し、プログラミングと数学の理解を深めることを目的としています。

このリポジトリは、プログラミング初心者から中級者を対象とし、理論を実装に落とし込むことで離散数学を直感的に理解できるよう進めていきます。


以下のWebページで解説しています。

[TypeScriptで学ぶ離散数学](https://ar-aca.tech/posts/discrete-mathematics-learning-guide/)


### 特徴
- **TypeScriptによる実装**: 各トピックをTypeScriptで表現し、実行可能なサンプルコードを提供。
- **自己学習に最適**: 離散数学の基礎をステップバイステップで学習可能。
- **プログラミングのスキル向上**: 論理的思考と数学的知識の両方を強化。

---

## Usage

### 1. クローン & セットアップ
まずは、このリポジトリをクローンし、TypeScriptのコンパイル環境を整えます。


# リポジトリをクローン
```bash
git clone https://github.com/your-username/DiscreteMath-TS.git
cd DiscreteMath-TS
```
もし、TypeScriptをインストールしていない場合は、以下のコマンドでインストールしてください。


# TypeScriptのインストール
```bash
npm install -g typescript
```
また、TypeScriptコードを直接実行したい場合は、ts-nodeを利用することもできます。


# ts-nodeのインストール
```bash
npm install -g ts-node
```
### 2. スクリプトの実行
それぞれのトピックは独立したスクリプトとして用意されており、各スクリプトで特定の離散数学の概念が実装されています。

例として、src フォルダ内の論理演算のサンプルを実行するには次のコマンドを使用します：


# 論理演算のサンプルを実行
```bash
npx ts-node src/logicalOperators.ts
```
### 3. 実行可能なトピック一覧
各トピックごとに実行可能なスクリプトが含まれています。主要なトピックは以下の通りです：

論理演算: logicalOperators.ts
集合論: setTheory.ts
グラフ理論: graphTheory.ts
計算理論: computationTheory.ts
4. 演習問題
各トピックには演習問題が用意されています。exercises フォルダ内のファイルを活用し、課題にチャレンジしながら学習を進めてください。

# ライセンス
このリポジトリはMITライセンスのもとで公開されています。
