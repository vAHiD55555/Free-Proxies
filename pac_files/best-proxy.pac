function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.40:14923",
        "SOCKS 45.74.31.47:9832",
        "SOCKS 69.174.54.215:13575",
        "SOCKS 45.74.31.46:4262",
        "SOCKS 45.74.31.42:14367",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 116.101.13.111:20002",
        "SOCKS 38.255.49.248:8888",
        "SOCKS 45.74.31.41:11901",
        "SOCKS 45.74.31.47:11397",
        "SOCKS 85.175.227.210:1080",
        "SOCKS 172.245.108.219:11080",
        "SOCKS 45.74.31.47:11873",
        "SOCKS 180.172.17.198:8081",
        "SOCKS 45.74.31.47:7484",
        "SOCKS 45.74.31.47:7493",
        "SOCKS 144.202.107.194:9150",
        "SOCKS 45.74.31.47:8959",
        "SOCKS 45.74.31.40:9352",
        "SOCKS 62.169.152.98:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}