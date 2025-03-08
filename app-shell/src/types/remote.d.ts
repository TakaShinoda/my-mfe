// 本当はリモート側で .d.ts ファイルを生成してホストアプリに配布？
// 今回はホストアプリ側で定義している

declare module 'overviewApp/Overview' {  
  const Overview: React.FC
  export { Overview }
}

declare module 'statsApp/Stats' {
  const Stats: React.FC
  export { Stats }
}