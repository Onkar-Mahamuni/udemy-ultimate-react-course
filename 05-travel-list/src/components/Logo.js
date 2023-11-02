// export function Logo() { //It is a named export, that must be imported with the same name in other components
//OR
export default function Logo() {
  //This is default export which can be imported with any name
  //In actual these components will be in different files
  //we are using them here in single one for learning
  return <h1>🌴 Far Away 👜</h1>;
}
