function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.5.21:60349",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 167.172.239.171:5555",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 107.173.37.104:22222",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 82.223.165.28:4733",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 51.20.91.142:3128",
        "SOCKS 202.62.52.206:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 83.169.255.92:1080",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}