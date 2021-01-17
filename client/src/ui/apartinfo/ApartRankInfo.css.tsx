// src/ui/apartinfo/ApartRankInfo.css.tsx
import styled from 'styled-components'
import theme from '../../styles/theme'

interface iProps{
  rankColor : string
}

const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.color.gray1};
  border-radius: 5px;
  margin-left: 16px;
  margin-right: 16px;
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
    color: ${(props : iProps) => props.rankColor};
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
    color: ${theme.color.black};
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
