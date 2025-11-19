function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.74.226.8:5001",
        "SOCKS 89.58.45.94:16343",
        "SOCKS 89.58.45.94:11723",
        "SOCKS 113.212.109.40:1080",
        "SOCKS 89.58.45.94:35095",
        "SOCKS 89.58.45.94:32999",
        "SOCKS 89.58.45.94:10081",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 152.53.171.242:35019",
        "SOCKS 38.183.144.25:1080",
        "SOCKS 89.58.45.94:19982",
        "SOCKS 89.58.45.94:37341",
        "SOCKS 152.53.171.242:51727",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 177.234.217.82:999",
        "SOCKS 152.53.171.242:42869",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 89.58.45.94:46105",
        "SOCKS 152.53.171.242:25251",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}