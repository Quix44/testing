
type ScoreProps = {
    score: number
}
function Score({ score }: ScoreProps) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            This is how many times you have clicked the button:{score}
        </h1>
    )
}

export default Score