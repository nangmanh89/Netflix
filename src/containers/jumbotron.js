import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image id={item.id} src={item.image} alt={item.alt} />
                        <Jumbotron.VideoContainer
                            id={item.id}
                            src={item.video}
                            muted
                            loop
                            autoPlay
                        ></Jumbotron.VideoContainer>
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    );
}
