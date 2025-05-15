const Forms = () => {
    return (
        <div>

            <p className="text-center">新規作成</p>
            <textarea className="min-h-[70vh] h-fit w-full border rounded-xl bg-slate-200" name="" id="" placeholder="メモを入力してください">
            </textarea>
            <div className="justify-center flex items-center h-[8vh]">
                <button className="h-[7vh] px-8 justify-center items-center bg-cyan-400 rounded-xl text-xl font-bold">保存する</button>
            </div>
        </div>

    )

}


export default Forms
