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
    height: 20px;

    > img {
      width: auto;
      height: 100%;
    }
  }

  & > div.Rank {
    margin-top: 12px;
    display: flex;
    height: 100%;
    flex-direction: row;
    font-size: 12px;

    > div.TitleAndRank {
      > div {
        margin-top: 4px;
      }
    }
  }

  & > div.Apart {
    margin-top: 12px;
    display: flex;
    height: 100%;
    flex-direction: row;
    font-size: 12px;
    > div.TitleAndRank {
      > div {
        margin-top: 4px;
      }
    }
  }

  div.ApartRank {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px !important;
  }

  div.Border {
    background-color: ${theme.color.white};
    width: 3px;
    height: 14px;
    margin-right: 8px;
    margin-top: 4px;
  }
`

export default Wrapper
