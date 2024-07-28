const Container = (props: { title: string; children: React.ReactElement }) => {
    const { title, children } = props

    return (
        <div style={{ background: 'red' }}>
            <span>{title}</span>
            {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだタグで要素を表示します */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        <Container title="Hello">
            <p>ここの部分が背景色になる</p>
        </Container>
    )
}

export default Parent