import { Container, Item, Pane, Title, SubTitle, Image, Inner, Video, VideoContainer } from './styles/jumbotron';

export default function Jumbotron({ children, ...restProps }) {
    return (
        <Item>
            <Inner {...restProps}>{children}</Inner>
        </Item>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};
Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>;
};
Jumbotron.VideoContainer = function JumbotronVideoContainer({ ...restProps }) {
    return (
        <VideoContainer {...restProps}>
            <Video {...restProps}></Video>
        </VideoContainer>
    );
};
