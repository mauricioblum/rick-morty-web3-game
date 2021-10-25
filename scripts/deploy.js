const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ['Summer', 'Rick Sanchez', 'Morty'], // Names
    [
      'https://i.imgur.com/PJMq6k2.png', // Images
      'https://i.imgur.com/KXvvI4T.png',
      'https://i.imgur.com/G5J721w.jpeg',
    ],
    [120, 100, 400], // HP values
    [60, 100, 25],
    [
      "I Didn't Know Freedom Meant People Doing Stuff That Sucks.",
      'Wubba Lubba Dub Dub!',
      'Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.',
    ],
    'Cromulon Head', // Boss name
    'https://i.imgur.com/FWTplIC.png', // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log('Contract deployed to:', gameContract.address);

  // Get the value of the NFT's URI.
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log('Token URI:', returnedTokenUri);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
