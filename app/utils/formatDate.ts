export default (value: string) => {
    const isoDate = value.replace(" ", "T");
    const date = new Date(isoDate);
    return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(date);
}