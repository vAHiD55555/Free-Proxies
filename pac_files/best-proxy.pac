function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.186.92.233:16000",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 135.181.203.208:80",
        "SOCKS 181.79.83.79:999",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 52.51.50.129:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 51.158.70.181:16379",
        "SOCKS 116.107.169.233:10001",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 170.130.202.134:3128",
        "SOCKS 42.113.54.237:16000",
        "SOCKS 51.159.159.73:80",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 98.162.96.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}