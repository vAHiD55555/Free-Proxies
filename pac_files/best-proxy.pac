function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4054",
        "SOCKS 62.60.131.253:6984",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 62.60.131.205:4091",
        "SOCKS 193.221.203.121:1080",
        "SOCKS 62.60.131.203:8192",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 36.255.98.178:14756",
        "SOCKS 103.187.86.14:8085",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 62.60.131.193:8460",
        "SOCKS 62.60.131.193:4054",
        "SOCKS 36.255.98.167:4888",
        "SOCKS 36.255.98.169:11654",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 46.8.69.113:1080",
        "SOCKS 36.255.98.181:5411",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}