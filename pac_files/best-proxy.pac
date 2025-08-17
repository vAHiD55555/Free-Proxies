function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.209.63.69:8245",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 51.79.99.237:4502",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 27.79.248.78:16000",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}