function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.34.95.110:8080",
        "SOCKS 159.65.230.91:20637",
        "SOCKS 159.65.230.91:20053",
        "SOCKS 103.28.121.58:80",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 159.65.230.91:20874",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 159.65.230.91:20764",
        "SOCKS 154.64.232.9:58367",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 43.160.195.20:20005",
        "SOCKS 159.65.230.91:20784",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 203.189.141.138:1080",
        "SOCKS 103.206.68.241:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}