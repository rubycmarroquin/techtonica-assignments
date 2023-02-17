function EndGameScreen({result}) {
    const text = result === "win" ? "You win" : "You lose";
    const subtext = result === "win" ? "Play again!" : "Better luck next time!";
    const spanId = result === "win" ? "YouWon" : "GameOver";


    return (
        <section className="endScreenSection">
            <div className="endScreenTextDiv">
                <h1 className="endScreenText">
                    <span id={spanId}>{text}</span><br/>{subtext}
                </h1>
            </div>
        </section>
    );
}

export default EndGameScreen;

// let endScreenSection = generateElement("section", "", "endScreenSection");
// let endScreenTextDiv = generateElement("div", "", "endScreenTextDiv");
// let endScreenText = generateElement("h1", `${message}`, "endScreenText");
// endScreenTextDiv.appendChild(endScreenText);
// endScreenSection.appendChild(endScreenTextDiv);