import { FC } from "react"
import { useRouter } from "next/router"
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "../../interfaces"

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
    const { id, img, name } = pokemon;

    const router = useRouter()

    const onCliick = () => {
        router.push(`/name/${name}`);
    }

    return (
      <Grid xs={ 6 } sm= { 3 } md={ 2 } xl={ 1 } key={ id }>
        <Card 
              onClick={ onCliick }
              hoverable 
              clickable
              >
          <Card.Body css={{ p: 1 }}>
            <Card.Image 
                src={ img }
                width="100%"
                height={ 140 }
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between" >
              <Text transform='capitalize' 
                    css={{
                      textGradient: "45deg, $yellow500 -20%, $red500 100%",
                    }}
              >
                { name }
              </Text>
              <Text
                    css={{
                      textGradient: "45deg, $yellow500 -20%, $red500 100%",
                    }}
              >#{ id }</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    )
}