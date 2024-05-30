import pandas as pd


def big_countries(df: pd.DataFrame) -> pd.DataFrame:
    return df[(df['population'] >= 25_000_000) | (df['area'] >= 3_000_000)][['name', 'population', 'area']]
