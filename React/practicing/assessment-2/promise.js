function delay(A) {
  return new Promise(resolve => {
    setTimeout(resolve, A);
  });
}


delay(1000).then(() => {
  console.log("Executed after 1 second");
});
