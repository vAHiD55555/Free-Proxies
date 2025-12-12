function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.116.159:5556",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 187.94.16.59:39665",
        "SOCKS 193.42.125.156:10808",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 128.140.76.145:54849",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 195.133.8.14:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 71.168.71.12:8890",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 107.148.21.105:12345",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 192.248.95.98:54126",
        "SOCKS 78.140.46.48:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}