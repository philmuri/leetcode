import pandas as pd


def findHeavyAnimals(df: pd.DataFrame) -> pd.DataFrame:
    # method chaining
    return df[df['weight'] > 100].sort_values(by='weight', ascending=False)[['name']]
