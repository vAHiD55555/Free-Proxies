function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.252.18.37:8060",
        "SOCKS 45.74.31.22:10418",
        "SOCKS 45.74.31.22:28968",
        "SOCKS 45.74.31.30:4915",
        "SOCKS 45.74.31.25:35898",
        "SOCKS 45.74.31.30:5930",
        "SOCKS 45.74.31.30:11770",
        "SOCKS 45.74.31.47:26080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 45.74.31.30:9682",
        "SOCKS 45.74.31.30:5871",
        "SOCKS 45.74.31.40:11244",
        "SOCKS 45.74.31.25:14282",
        "SOCKS 45.74.31.50:21253",
        "SOCKS 45.74.31.42:12213",
        "SOCKS 45.74.31.25:4493",
        "SOCKS 45.74.31.22:17054",
        "SOCKS 45.74.31.25:8083",
        "SOCKS 45.74.31.30:4105",
        "SOCKS 45.74.31.42:12329",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}