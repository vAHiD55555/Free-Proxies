function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:5624",
        "SOCKS 45.74.31.30:7833",
        "SOCKS 91.226.172.214:1080",
        "SOCKS 45.74.31.30:9533",
        "SOCKS 45.74.31.30:4097",
        "SOCKS 45.74.31.30:9807",
        "SOCKS 103.162.30.189:10808",
        "SOCKS 45.74.31.30:8969",
        "SOCKS 45.74.31.30:12379",
        "SOCKS 47.90.167.27:8000",
        "SOCKS 45.74.31.30:5469",
        "SOCKS 45.74.31.42:13786",
        "SOCKS 202.181.24.102:10811",
        "SOCKS 158.101.15.1:443",
        "SOCKS 103.25.209.202:2021",
        "SOCKS 141.147.109.224:1080",
        "SOCKS 45.74.31.42:13444",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 45.74.31.30:10002",
        "SOCKS 45.74.31.30:5088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}