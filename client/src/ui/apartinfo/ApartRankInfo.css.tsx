// src/ui/apartinfo/ApartRankInfo.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps {
  rankColor: string
}

const Wrapper = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  background-image: ${(props: iProps) => props.rankColor};
  background-color: ${(props: iProps) => props.rankColor};
  color: ${theme.color.white};
  border-radius: 15px;
  padding: 16px;

  & > div.RankImg {
    height: 40px;

    > img {
      width: auto;
      height: 100%;
    }
  }

  & > div.Rank {
    margin-top: 12px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    > div.ApartRank {
      font-size: 16px;
      font-weight: bold;
    }
  }

  & > div.Apart {
    margin-top: 12px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    > div.ApartRank {
      font-size: 16px;
      font-weight: bold;
    }
  }
`

export default Wrapper
